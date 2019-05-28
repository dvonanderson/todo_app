import Route from '@ember/routing/route';
import { RouteQueryManager } from 'ember-apollo-client';
import allTodos from './allTodos';

export default Route.extend(RouteQueryManager, {
	model(){
		return this.apollo.watchQuery({ query: allTodos }, "allTodos");
	}
});
