import Controller from '@ember/controller';
import mutation from './mutation';
import { inject as service } from '@ember/service'

export default Controller.extend({
	apollo: service(),
	title: "",
	description: "",

	actions: {
		handleSubmit(){
			this.apollo.mutate({
				mutation, variables: { title: this.title, description: this.description}
			})
				.then(() => this.transitionToRoute('todos'));
			// Needs validation in here to check for error messages on submit
			this.set('title', "")
			this.set('description', "")
		}
	}
})