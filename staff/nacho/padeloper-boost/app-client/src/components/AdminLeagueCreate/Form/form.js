import React from 'react'
import './css/main.css'

function Form(props){
    return(
    <form name="formulario">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="first" className="textlabels">League Name</label>
                      <input type="text" name="name" className="form-control" placeholder="typethe name of the league" id="first" onChange = {props.inputName} required/>
                    </div>
                  </div>
                  {/*  col-md-6   */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="last" className="textlabels">City</label>
                      <input type="text" name="city" className="form-control" placeholder="type the city" id="last" onChange = {props.inputCity} required/>
                    </div>
                  </div>
                  {/*  col-md-6   */}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="company" className="textlabels">Club</label>
                      <input type="text" name="club" className="form-control" placeholder="type the name of the club" id="company" onChange = {props.inputClub} required />
                    </div>
                  </div>
                  {/*  col-md-6   */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone" className="textlabels">Category</label>
                      <select className="form-control" name="category" id="exampleSelect1" onChange = {props.inputCategory} required>
                        <option value = "1">1</option>
                        <option value = "2">2</option> 
                        <option value = "3">3</option>
                        <option value = "4">4</option> 
                        <option value = "5">5</option>
                        <option>other</option>                          
                      </select>
                    </div>
                  </div>
                  {/*  col-md-6   */}
                </div>
                {/*  row   */}
                <div className="row">
                  <div className="col-md-6">                  
                    <div className="form-group">
                      <label htmlFor="exampleSelect1" className="textlabels">League type</label>
                      <select className="form-control" name="type" id="exampleSelect1" onChange = {props.inputType} required>
                        <option>Public</option>
                        <option>Private</option>                          
                      </select>
                    </div>
                  </div>
                  {/*  col-md-6   */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="date" className="textlabels">Date creation</label>
                      <input type="date" className="form-control" id="url" onChange = {props.inputDate} required />
                    </div>
                  </div>
                  {/*  col-md-6   */}

                  {/*  col-md-6   */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="num" className="textlabels">MaxPlayers</label>
                      <input type="number" className="form-control" id="number" onChange = {props.inputMaxPlayers} required />
                    </div>
                  </div>
                  {/*  col-md-6   */}
                </div>
                {/*  row   */}
                <button type="submit" className="btn btn-primary" onClick = {props.create}>Submit</button>
    </form>
    )
}
export default Form