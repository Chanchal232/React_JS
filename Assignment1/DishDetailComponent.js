import React, { Component } from 'react'
import {Card, CardImg, CardText,CardBody,CardTitle} from 'reactstrap'
export class DishDetail extends Component{
 
    getComments = (comment)=>{
        if(comment == null)
        {
            return <div></div>
        }
         const commentDetails = comment.map((com)=>{
                return (
                    <li key={com.id}>
                        <p>{com.comment}</p>
                        <p>-- {com.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(com.date))}
                    </p>
                    </li>
                )
            }
            )
        return(
            <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                <ul className="list-unstyled">
                {commentDetails}
                </ul>
            </div>
        )
    }
    renderdish = (dish)=>{
        return(
           
            <div  className="col-12 col-md-5 m-1">
                
                  <Card>
                  
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>    
                        
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
               
                 </Card>
                 
            </div>

        )
    }
    render(){
        const dish = this.props.dish
        if(dish==null)
        {
            return(
            <div></div>
            )
        }
        const specificDish = this.renderdish(dish)
        const comment = this.getComments(dish.comments)
        console.log(comment)
    
        return(
            <div className="container">
                    <div className="row">
                        {specificDish}
                        {comment}
                    </div>
            </div>
        )      
        
    }
    

        

    
}
