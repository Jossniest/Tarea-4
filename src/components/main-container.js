import React,{Component} from 'react';
import './main-container.css';
import Saved from './guardados';
import Nuevos from './nuevos';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const Components = {
    Tab1: Saved,
    Tab2: Nuevos
}

class Container extends Component{

    render(){
        return (
            <Tabs defaultIndex={0} className="d-flex justify-content-center align-content-center " style={{marginTop:'20px'}}>
                <div className="p-2">
                <TabList>
                <div className=" d-flex flex-nowrap flex-row align-content-start" >                    
                        <Tab style={{ background:'#34495E', color:'#ffffff'}}>Guardados</Tab>
                        <Tab style={{ background:'#34495E', color:'#ffffff'}}>Nuevos</Tab>                   
                </div>    
                    
                </TabList>

                <TabPanel >
                  <div className="card space-container flex-column " style={{overflow:'auto'}}>
                  <div className="card-body" style={{overflow:'auto'}}>
                  <Components.Tab1/>
                  </div>
                  </div>
                </TabPanel>
                <TabPanel >
                <div className="card space-container flex-column " style={{overflow:'auto'}}>
                  <div className="card-body" style={{overflow:'auto'}}>
                  <Components.Tab2/>
                  </div>
                  </div>
                </TabPanel>
                </div>
            </Tabs>
            
            );
    } 
    
}

export default Container;


