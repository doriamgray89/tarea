import React from 'react';
import Select from 'react-select';
import {useRouter} from 'next/router';
import List, { Estado, SendUrl } from './Data';
import { Json } from '../../components/Json';

class SelectPage extends React.Component {
  
  workers = Json();

  options = Estado(this.workers);
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    SendUrl(selectedOption);
    
  };

  render() {
    const { selectedOption } = this.state;
 

    return (
        <div className="container" style={{width: "100%",
                                            float:"left"}}>        
      <Select
        value={selectedOption}
        placeholder='Select state'
        onChange={this.handleChange}
        options={this.options}
        // isSearchable
        isMulti 
      />
      </div>
    );
  }
}

export default SelectPage