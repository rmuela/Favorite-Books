import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Item from "./Item";
import Loading from "./Loading";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            videos:null
        }
    }
    componentDidMount() {
        this.setState({isLoading:true});
        setTimeout(() =>{
            this.setState({isLoading:false, videos:[{
                id:0,
                title:"crimen y castigo",
                url:"./Resources/crimes_castigo.jpg",
                thumbnail:"https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6034d7d1f3e0f54529b2b1a1_Crimen-y-castigo-fiodor-dostoyevski-editorial-alma.jpg",
            },
            {
                id:1,
                title:"Alfred y Emily",
                url:'C:\Users\Rafael\Documents\Clase\Cursos\REACT\Resources\alfred-y-emily.jpg',
                thumbnail:'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA01/201312/27/00106520489987____3__640x640.jpg',
            }
            ]});
        },2000);
    }
    render() {
        const { videos, isLoading } = this.state;
        if (isLoading)  return (<Loading message="Cargando ..."/>);
        return (
        <React.Fragment>
            <Header onClickAdd={this.handleAdd} />
            <div className="container">
                <div className="grid-container">
                    {
                        videos && videos.map((video,i) => {
                            return (<Item key={i} data={video}/>)
                        })
                    }
                </div>
            </div>
           
        </React.Fragment> );
       
    }
}

export default List;