import Controller from '@ember/controller';
import mutation from './mutation';
import { inject as service } from '@ember/service'

export default Controller.extend({
	apollo: service(),

	actions: {

		editTodo(){

			const description = this.get('description');
			const title = this.get('title')
			const id = this.get('id')
			let variables = {title, description}

			this.apollo.mutate(
			{
				mutation, 
				variables
			},
			'editTodo'
			)
		}
	}
})