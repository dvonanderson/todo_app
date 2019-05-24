import Route from '@ember/routing/route';
// import { RouteQueryManager } from 'ember-apollo-client';
// import allTodos from './allTodos';

export default Route.extend({
	model(){
		return [
			{
				user: 'Devon Anderson',
				abbrev: 'DA',
				position: '1'
			},
			{
				user: 'Courtney Anderson',
				abbrev: 'CA',
				position: '2'
			},
			{
				user: 'Adgell Anderson',
				abbrev: 'AA',
				position: '3'
			},
			{
				user: 'Rylee Anderson',
				abbrev: 'RA',
				position: '4'
			}
		]
	}
});