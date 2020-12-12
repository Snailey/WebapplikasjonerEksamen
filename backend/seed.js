import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './config/database.js';
import User from './models/user.js';
import Office from './models/office.js';
import Category from './models/category.js';
import Article from './models/article.js';

const app = express();

app.use(express.json());

const users = [
  new User({
    name: 'User Userson',
    email: 'user@test.com',
    password: 123456,
    role: 'user',
  }),
  new User({
    name: 'Admin Adminson',
    email: 'admin@test.com',
    password: 123456,
    role: 'admin',
  }),
  new User({
    name: 'Super Superson',
    email: 'super@test.com',
    password: 123456,
    role: 'super',
  }),
];

const offices = [
  new Office({
    id: 1,
    name: 'Rørlegger 1',
    email: 'fredrikstad1@epost.no',
    city: 'Fredrikstad',
    address: 'Rørleggerveien 1',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 2,
    name: 'Rørlegger 2',
    email: 'fredrikstad2@epost.no',
    city: 'Fredrikstad',
    address: 'Rørleggerveien 2',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 3,
    name: 'Rørlegger 3',
    email: 'fredrikstad3@epost.no',
    city: 'Fredrikstad',
    address: 'Rørleggerveien 3',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 4,
    name: 'Rørlegger 4',
    email: 'fredrikstad4@epost.no',
    city: 'Fredrikstad',
    address: 'Rørleggerveien 4',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 5,
    name: 'Rørlegger 5',
    email: 'fredrikstad5@epost.no',
    city: 'Fredrikstad',
    address: 'Rørleggerveien 5',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 6,
    name: 'Rørlegger 6',
    email: 'fredrikstad6@epost.no',
    city: 'Fredrikstad',
    address: 'Rørleggerveien 6',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 7,
    name: 'Rørlegger 7',
    email: 'fredrikstad7@epost.no',
    city: 'Fredrikstad',
    address: 'Rørleggerveien 7',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 8,
    name: 'Rørlegger 8',
    email: 'fredrikstad8@epost.no',
    city: 'Fredrikstad',
    address: 'Rørleggerveien 8',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 11,
    name: 'Rørlegger 9',
    email: 'sarpsborg9@epost.no',
    city: 'Sarpsborg',
    address: 'Rørleggerveien 9',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 12,
    name: 'Rørlegger 10',
    email: 'sarpsborg10@epost.no',
    city: 'Sarpsborg',
    address: 'Rørleggerveien 10',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 13,
    name: 'Rørlegger 11',
    email: 'sarpsborg11@epost.no',
    city: 'Sarpsborg',
    address: 'Rørleggerveien 11',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 14,
    name: 'Rørlegger 12',
    email: 'sarpsborg12@epost.no',
    city: 'Sarpsborg',
    address: 'Rørleggerveien 12',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 15,
    name: 'Rørlegger 13',
    email: 'sarpsborg13@epost.no',
    city: 'Sarpsborg',
    address: 'Rørleggerveien 13',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 21,
    name: 'Rørlegger 14',
    email: 'moss14@epost.no',
    city: 'Moss',
    address: 'Rørleggerveien 14',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 22,
    name: 'Rørlegger 15',
    email: 'moss15@epost.no',
    city: 'Moss',
    address: 'Rørleggerveien 15',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 23,
    name: 'Rørlegger 16',
    email: 'moss16@epost.no',
    city: 'Moss',
    address: 'Rørleggerveien 16',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 23,
    name: 'Rørlegger 17',
    email: 'moss17@epost.no',
    city: 'Moss',
    address: 'Rørleggerveien 17',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 24,
    name: 'Rørlegger 18',
    email: 'moss18@epost.no',
    city: 'Moss',
    address: 'Rørleggerveien 18',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 31,
    name: 'Rørlegger 19',
    email: 'oslo19@epost.no',
    city: 'Oslo',
    address: 'Rørleggerveien 19',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 32,
    name: 'Rørlegger 20',
    email: 'oslo20@epost.no',
    city: 'Oslo',
    address: 'Rørleggerveien 20',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 33,
    name: 'Rørlegger 21',
    email: 'oslo21@epost.no',
    city: 'Oslo',
    address: 'Rørleggerveien 21',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
  new Office({
    id: 34,
    name: 'Rørlegger 22',
    email: 'oslo22@epost.no',
    city: 'Oslo',
    address: 'Rørleggerveien 22',
    phone: '69 99 00 00',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
      'ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo ' +
      'dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ' +
      'amet',
    employees: [
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
      {
        name: 'Ansatt Ansattnavn',
        position: 'Stilling',
        image: 'https://www.gamereactor.no/media/65/_1976583.jpg',
      },
    ],
  }),
];

const categories = [
  new Category({
    name: 'Baderom',
  }),
  new Category({
    name: 'Kjøkken',
  }),
  new Category({
    name: 'Rør',
  }),
  new Category({
    name: 'Bad',
  }),
  new Category({
    name: 'Armatur',
  }),
];

const articles = [
  new Article({
    public: 'false',
    published: 'true',
    title: 'Artikkel 1',
    author: 'Lars Larsen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',
    category: 'Kjøkken',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'true',
    published: 'true',
    title: 'Artikkel 2',
    author: 'Gunn Gundersen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Baderom',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'true',
    published: 'true',
    title: 'Artikkel 3',
    author: 'Simen Simensen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Rør',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'false',
    published: 'true',
    title: 'Artikkel 4',
    author: 'Lars Larsen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Armatur',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'true',
    published: 'true',
    title: 'Artikkel 5',
    author: 'Gunn Gundersen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Baderom',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'true',
    published: 'true',
    title: 'Artikkel 6',
    author: 'Simen Simensen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Kjøkken',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'true',
    published: 'false',
    title: 'Artikkel 7',
    author: 'Lars Larsen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Rør',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'false',
    published: 'false',
    title: 'Artikkel 8',
    author: 'Gunn Gundersen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Armatur',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'false',
    published: 'true',
    title: 'Artikkel 9',
    author: 'Lars Larsen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Bad',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'false',
    published: 'true',
    title: 'Artikkel 10',
    author: 'Simen Simensen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Baderom',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'true',
    published: 'true',
    title: 'Artikkel 11',
    author: 'Gunn Gundersen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Kjøkken',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'false',
    published: 'false',
    title: 'Artikkel 12',
    author: 'Simen Simensen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Bad',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'false',
    published: 'true',
    title: 'Artikkel 13',
    author: 'Lars Larsen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Baderom',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
  new Article({
    public: 'true',
    published: 'true',
    title: 'Artikkel 14',
    author: 'Gunn Gundersen',
    ingress:
      'Ingres Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.',

    category: 'Bad',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  }),
];

connectDB();

app.use(
  cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT}`)
);

users.map(async (user, index) => {
  try {
    await user.save(() => {
      if (index === users.length - 1) {
        console.log('USERS DONE!');
      }
    });
  } catch (error) {
    console.log('ERROS SAVING USERS');
  }
});

offices.map(async (office, index) => {
  try {
    await office.save(() => {
      if (index === offices.length - 1) {
        console.log('OFFICES DONE!');
      }
    });
  } catch (error) {
    console.log('ERROR SAVING OFFICES');
  }
});

categories.map(async (category, index) => {
  try {
    await category.save(() => {
      if (index === categories.length - 1) {
        console.log('CATEGORIES DONE!');
      }
    });
  } catch (error) {
    console.log('ERROR SAVING OFFICES');
  }
});

articles.map(async (article, index) => {
  try {
    await article.save(() => {
      if (index === articles.length - 1) {
        console.log('ARTICLES DONE!');
      }
    });
  } catch (error) {
    console.log('ERROR SAVING OFFICES');
  }
});
