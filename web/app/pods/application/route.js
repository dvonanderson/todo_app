import Route from '@ember/routing/route';
// import { RouteQueryManager } from 'ember-apollo-client';
// import allTodos from './allTodos';

export default Route.extend({
	model(){
		return [
			{
				id: '1',
				user: 'Devon Anderson',
				abbrev: 'DA',
				position: '1'
			},
			{
				id: '2',
				user: 'Courtney Anderson',
				abbrev: 'CA',
				position: '2'
			},
			{
				id: '3',
				user: 'Adgell Anderson',
				abbrev: 'AA',
				position: '3'
			},
			{
				id: '4',
				user: 'Rylee Anderson',
				abbrev: 'RA',
				position: '4'
			}
		]
	}
});