import React from 'react';

import expect from 'expect';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import {mount,shallow} from 'enzyme';
import HomePage from '../src/components/HomePage';
import {AddNewspaperPage} from '../src/components/newspapers/AddNewspaperPage';
import { writer } from 'repl';
import { NewspaperService } from 'api'; 
import { addNewspaper} from 'actions';

describe("<HomePage>",function(){
it("Should have one div element",function(){
    
    const wrapper = mount(<HomePage />);
    
    expect(wrapper.find('div').text()).toEqual("Home Page");
    expect(wrapper.find('div').length).toEqual(1);
})
});

describe("Newspaper",function(){
    it("Should have table",function(){
        const newspapers = [{name:"A",publishYear:1990}];
        const wrapper = mount(<AddNewspaperPage />);
        expect(wrapper.find('table').length).toEqual(1);
    });
});
