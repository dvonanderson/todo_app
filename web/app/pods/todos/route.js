import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return [
			{
				id: '1',
				title: 'the real deal',
				description: 'learning about the real deal'
			},
			{
				id: '2',
				title: 'the other real deal',
				description: 'learning about the other real deal'
			}
		]
	}
});
