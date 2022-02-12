const sequelize = require('../config/connection');
const { Event } = require('../models');

const eventdata = [
    {
        title: 'Office party',
        user_id: '1',
        days: '',
        invite_emails: ''
    },
    {
        title: 'Birthdat party',
        user_id: '2',
        days: '',
        invite_emails: ''
    },
    {
        title: 'Work meeting',
        user_id: '3',
        days: '',
        invite_emails: ''
    },
    {
        title: 'Hike',
        user_id: '4',
        days: '',
        invite_emails: ''
    },
    {
        title: 'Surf',
        user_id: '5',
        days: '',
        invite_emails: ''
    }
];
const eventSeeds = () => User.bulkCreate(eventdata, { individualHooks: true });

module.exports = eventSeeds;

