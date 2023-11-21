import React, { Fragment,useEffect,useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import APPUrl from '../../RestAPI/APPUrl';
import RestClient from '../../RestAPI/RestClient';
import Loading from "../Loading/Loading";
import Failure from "../Failure/Failure";
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import parse from 'html-react-parser';
function AllProject() {

  const [state, setState] = useState({
    myData: [],
    loading:true,
    error:false
  });

  useEffect(() => {
    
    RestClient.GetRequest(APPUrl.allProject).then((result) => {
      if(result ==null){
        setState({error:true})
      }else{
        setState({ myData: result,loading:false });
      }
      
    }).catch(error=>{
      setState({error:true})
    });
      
  }, []);


  if(state.loading==true){
    return<Loading/>
   }else if(state.error== true){
    return<Failure/>
  }else{
  
  let Data=state.myData.map((Data)=>{
      
   return <Col lg={4} md={4} sm={12}>
    <Zoom>
    <Card style={{ width: '18rem' }} className="projectcard">
<Card.Img variant="top" src={Data.image_1}/>

<Card.Body>

<Card.Title className="title">{Data.project_name} </Card.Title>
<Card.Text  className="desc">
{parse(Data.project_desc)}
</Card.Text>
<Link to={"/project/"+ Data.id +"/" +Data.project_name}> <Button variant="success">View More</Button></Link>
</Card.Body>
</Card>
</Zoom>
</Col>  
  })







  return (
    <Fragment>
          <Container className="text-center">
            <LightSpeed>
          <h1 className="titleservice">RECENT PROJECTS</h1>
          </LightSpeed>
          <div className="bottom"></div>
              <Row>
              {Data}


              
    </Row>
          </Container>
    </Fragment>
  )
}
}
export default AllProject
