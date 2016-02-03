'use strict';

var m = require('mithril');

module.exports = function () {
  return function (app) {
    // dashboard
    app.components.pages.dashboard.theme.navClass = '.menu';
    app.components.pages.dashboard.theme.navItemClass = '.menu-item';

    // list pages
    app.components.pages.list.theme.dashboardButtonClass = '.btn';
    app.components.pages.list.theme.createButtonClass = '.btn.btn-primary';

    // lists
    app.components.listItem.theme.actionClass = '.btn';
    var actionsView = app.components.listItem.views.actions;
    app.components.listItem.views.actions = function () {
      return m('.btn-group', actionsView.apply(null, arguments));
    };

    // list filters
    app.components.listFilters.theme.applyButtonClass = '.btn.btn-primary';
    app.components.listFilters.theme.fieldsClass = '.columns';
    app.components.listFilters.theme.fieldClass = '.form.one-fourth.column';
    app.components.listFilters.theme.fieldTag = 'dl';
    var filterLabelView = app.components.fields.filterLabel.view;
    app.components.fields.filterLabel.view = function () {
      return m('dt', filterLabelView.apply(null, arguments));
    };
    var filterInputView = app.components.listFilters.views.fieldInput;
    app.components.listFilters.views.fieldInput = function () {
      return m('dd', filterInputView.apply(null, arguments));
    };

    app.components.listFilters.theme.sortTag = 'dl';
    var sortLabelView = app.components.listFilters.views.sortLabel;
    app.components.listFilters.views.sortLabel = function () {
      return m('dt', sortLabelView.apply(null, arguments));
    };
    var sortInputsView = app.components.listFilters.views.sortInputs;
    app.components.listFilters.views.sortInputs = function () {
      return m('dd', sortInputsView.apply(null, arguments));
    };

    // show resource
    app.components.show.theme.backButtonClass = '.btn';
    app.components.show.theme.listButtonClass = '.btn';
    app.components.show.theme.editButtonClass = '.btn.btn-primary';

    // edit resource
    app.components.edit.theme.backButtonClass = '.btn';
    app.components.edit.theme.listButtonClass = '.btn';

    // pagination
    app.components.pagination.theme.backButtonClass = '.btn';
    app.components.pagination.theme.nextButtonClass = '.btn';
    app.components.pagination.theme.currentClass = '.btn.btn-outline';

    // remove buttons
    app.components.removeButton.theme.class = '.btn.btn-danger';

    // fields
    var fields = app.components.fields;
    fields.group.theme.fieldClass = '.form';
    fields.group.theme.fieldTag = 'dl';
    fields.group.theme.toggleButtonClass = '.btn.btn-sm';

    var labelView = fields.group.views.fieldLabel;
    fields.group.views.fieldLabel = function () {
      return m('dt', labelView.apply(null, arguments));
    };
    var inputView = fields.group.views.fieldInput;
    fields.group.views.fieldInput = function () {
      return m('dd', inputView.apply(null, arguments));
    };

    fields.relation.theme.toggleButtonClass = '.btn.btn-sm';
    fields.resource.theme.saveButtonClass = '.btn.btn-primary';
    fields.resource.theme.editButtonClass = '.btn.btn-primary';
  };
};
