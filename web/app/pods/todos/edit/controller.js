import Controller from '@ember/controller';
import mutation from './mutation';
import { inject as service } from '@ember/service'

export default Controller.extend({
	apollo: service(),
})