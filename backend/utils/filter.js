// hentet fra forelesning eksempler
export class Filter {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  sort() {
    // ?sort=views / ?sort=active,views
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-updated');
    }
    return this;
  }

  search() {
    // ?q=string
    if (this.queryString.q) {
      const searchString = this.queryString.q.split('-').join(' ');
      this.query = this.query.find({ $text: { $search: `"${searchString}"` } });
    }
    return this;
  }

  filter() {
    // ?public=true / ?views[lt]
    const query = { ...this.queryString };
    const removeFields = ['sort', 'q', 'fields', 'page', 'limit'];
    removeFields.forEach((el) => delete query[el]);
    let queryString = JSON.stringify(query);
    queryString = queryString.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );
    this.query.find(JSON.parse(queryString));
    return this;
  }

  limit() {
    // ?fields=name-email
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split('-').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    // ?limit=10&page=4
    const page = parseInt(this.queryString.page, 10) || 1;
    const limit = parseInt(this.queryString.limit, 10) || 10;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
