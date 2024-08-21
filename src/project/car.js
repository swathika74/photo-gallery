import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <h2>my {this.state.brand}</h2>
        <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}
            
    {/* // const handleDeleteImage = (id) => { */}
    {/* //     const updatedImages = filteredImages.filter(image => image.id !== id);
    //     setFilteredImages(updatedImages);
    // }; */}
              {/* <button onClick={() => 
                                        (image.id)}>Delete</button> */}
              
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
         {/* const handleDeleteImage = useCallback((id) => {
    const updatedImages = localStorage.removeItem(images.length + 1);
    setFilteredImages(updatedImages);
  }, []); */}

      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Carhttps://youtu.be/2VSL732MeNk?si=8RM98RI_d8wClnjP


