// write your CatList component here
import React, {Component} from 'react';

class CatList extends Component{
  render(){
    console.log(this.props)
    const pics = this.props.catPics.map((catPic, index)=>{
      return<div key={index}><img width="200" height="200" src={catPic.url} alt="cat pic"/></div>
    })
    return(
      <div>
        {pics}
      </div>
    )
  }
}

export default CatList;
