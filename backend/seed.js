import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import connectDB from './config/database.js';
import User from './models/user.js';
import Office from './models/office.js';

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

const seedDB = async () => {
  await connectDB();

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
};

seedDB();
