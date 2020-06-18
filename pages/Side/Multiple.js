import React from 'react';
import Select from 'react-select';
import { Estado, SendUrl } from './Data';
 
class SelectPage extends React.Component {
    
    options = Estado();
    
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