import player1 from './../public/player1.jpg';
import player2 from './../public/player2.jpg';
import player3 from './../public/player3.jpg';
import addImg from './../public/addImg.jpg';
import coll1 from './../public/coll1.jpg';
import coll2 from './../public/coll2.jpg';

export const SPORTS = [
  {
    type: 'team',
    name: 'Sacramento River Cats',
    events: 48,
    sports: 'Baseball',
    image: player1,
  },
  {
    type: 'team',
    name: 'Las Vegas Aviators',
    events: 28,
    sports: 'Baseball',
    image: player2,
  },
  {
    type: 'team',
    name: 'New jersey devils',
    events: 15,
    sports: 'Ice Hockey',
    image: player3,
  },
  {
    type: 'team',
    name: 'Las Vegas Aviators',
    events: 28,
    sports: 'Baseball',
    image: player2,
  },
  {
    type: 'add',
    title: 'Advertisement title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: addImg,
  },
];

export const COLLECTIONS = [
  {
    name: 'Las Vegas Aviators',
    day: 'SUN',
    date: 'OCT 15',
    time: '4:30 PM',
    venue: 'Las Vegas Ballpark, Las Vegas, Nevada',
    action: 'Take Flight Collection',
    image: coll1,
  },
  {
    name: 'Sacramento River Cats',
    day: 'SUN',
    date: 'OCT 15',
    time: '4:30 PM',
    venue: 'Sutter Health Park, Sacramento, California',
    action: 'Orange Collection',
    image: coll2,
  },
  {
    name: 'Las Vegas Aviators',
    day: 'SUN',
    date: 'OCT 15',
    time: '4:30 PM',
    venue: 'Las Vegas Ballpark, Las Vegas, Nevada',
    action: 'Take Flight Collection',
    image: coll1,
  },
];
