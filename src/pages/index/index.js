import './index.scss'


import 'air-datepicker/dist/js/datepicker'
import 'air-datepicker/dist/css/datepicker.min.css'

import '../../modules/comment/img/avatar.png'

import {
    dropdown
} from '../../modules/dropdown/dropdown.js'

import {
    expCheckboxList
} from '../../modules/expandable-checkbox-list/expandable-checkbox-list.js'

import { RangeSlider } from '../../modules/range-slider/range-slider.js';
import { Pager } from './../../modules/pagination/pagination';

import { MaskedTextField } from '../../modules/masked-text-field/masked-text-field';

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }

ready(() => { 
    const maskedTextDate = new MaskedTextField('date')

    const demoDropDown = new dropdown('.dropdownVisitors')
    const demoDropDown2 = new dropdown('.dropdownEnvarenment')
    const expCheckBoxList = expCheckboxList('.checkList-test')
        
    const rangeSlider = new RangeSlider()
    // ur.update() //метод для изменений
    // let foog = ur.getValue() //чтение состояния

    const pager = new Pager({
        items: 15,
        itemsOnPage: 5,
        element: '.pager'
    })



});

