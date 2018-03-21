import React, { Component } from 'react'
import Carousel from '../Carousel';
import './css/main.css'
import RecipeBox from '../RecipeBox'

class Home extends Component{

    render(){
        return(
            <div>
                <main>
                    <Carousel/>

                    <section>
                        <h2 class="title-3">Latest Recipe</h2>

                        <div className="row">
                            <div className="inside">
                                <RecipeBox/>
                            </div>
                        </div>

                    </section>

                    <section>
                        <h2 class="title-3">Category</h2>
                    </section>

                    <section>
                        <h2 class="title-3">Popular Recipe</h2>
                    </section>

                    <section>
                        <h2 class="title-3">Collection</h2>
                    </section>

                </main>
            </div>
        )
    }
}

export default Home