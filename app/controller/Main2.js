Ext.define('Touch2Demo.controller.Main2', {
    extend: 'Ext.app.Controller',
    config: {
	refs: {
	    loginForm: {
		xtype: 'loginForm',
		selector: 'loginForm',
		autoCreate: true
	    }
	},
	control: {
	    'button[action=teste]':{
		tap:'showLogin'
	    }
	}
    },
    showLogin: function () {
	Ext.Viewport.setActiveItem(this.getLoginForm());
    }

});
