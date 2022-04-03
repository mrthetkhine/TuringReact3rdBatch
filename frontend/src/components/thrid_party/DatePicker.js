import React from "react";
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-ja';
datepickerFactory($);
datepickerJAFactory($);
class DatePicker extends React.Component
{
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.datepicker();
    }

    componentWillUnmount() {
        this.$el.datepicker('destroy');
    }
    render() {
        return (<div>
             Date Picker
            <input type={"text"}
                   ref={el => this.el = el}></input>
        </div>);
    }
}
export default DatePicker;