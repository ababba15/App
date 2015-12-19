Template.timepicker.onRendered(function () {
    this.$('.timepick').datetimepicker({
        format: 'HH : mm',
        dayViewHeaderFormat: 'HH : mm',
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: false,
        locale: moment.locale('ru'),
        defaultDate: false
    });

});

Template.datepicker.onRendered(function () {
    this.$('.datepick').datetimepicker({
        format: 'DD MMMM YYYY',
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: false,
        locale: moment.locale('ru'),
        defaultDate: false
    });

});

Template.datetimepicker.onRendered(function () {
    this.$('.datetimepick').datetimepicker({
        format: 'DD MMMM YYYY, HH : mm',
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: false,
        locale: moment.locale('ru'),
        defaultDate: false
    });

});
