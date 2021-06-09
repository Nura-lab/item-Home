import React from 'react'
import { CustomCollapse } from '../../components/CustomCollapse'
import { CustomButton } from '../../components/CustomButton'
import { Button } from 'antd'
import './Home.less'
import { faq } from '../../data'
import { Switch, Link, Route } from 'react-router-dom'
import mobile  from '../../images/mobile.png'
import eazy from '../../images/eazy.png'
import solution from '../../images/solution.png'
import circle from '../../images/circle.png'
import legal from '../../images/legal.png'
import customers from '../../images/customers.png'
import card from '../../images/card.png'

export const Home = () => {

    return (
        <div>
            {/* header section */}
            <section className="header-section">
                <div className="container">
                    <div>
                        <p className="sub-title">Powered By AI</p>
                        <h1>The smartest, <br /> fastest way to <br /> Legal Aggrements</h1>
                        <p className="text">
                            Generate your
                            <b> Privacy Policy, Terms of Use</b> <br /> or
                            <b> Cookie Policy</b>for
                            <a href=""> free</a>
                        </p>
                        <div>
                            <CustomButton primary>Generate for free</CustomButton>
                            <Button type="text">Learn more {">"} </Button>
                        </div>
                    </div>
                </div>
            </section>
            {/*section-two*/ }
            <section>
              <div className="section_two">
          <img src={mobile} />
          </div>
        </section>
       {/*section-three*/ }
      <section>
        <div className="section_three">
          <img style={{ marginTop: "30px" }} src={eazy} />
        </div>
      </section>
      
       {/*section-four*/ }
      <section>
     
        <div className="section_four">
            <img
              style={{width: '100%'}}
              src={solution}
            />
          </div>
      </section>
       {/*section-five*/ }
      <section>
        <div className="section_five">
          <div className="container">
            <img style={{ marginBottom: "-25px" }} src={circle} />
          </div>
        </div>
      </section>
        {/*section-six*/ }
      <section>
        <div className="section_six">
            <img  style={{width: "100%"}} src={legal} />
        </div>
      </section>
        {/*section-seven*/ }
      <section>
        <div className="section_seven">
          <div className="continer">
             <img style={{alignItems: "flex-end",marginRight: 0}} src={customers} />
          </div>
          </div>
      </section>
        {/*section-eight*/ }
      <section>
        <div className="section_eight">
          <div className="container">
             <img style={{ margin: "80px  0 80px 0" }} src={card} />
          </div>
        </div>
      </section>

       {/* faq section */}
       <section className="faq-section">
                <div className="container">
                    <div className="titles">
                      <p className="sub-title">Solutions to Your Problems</p>
                      <h2>Do You Have any Questions?</h2>
                      <p>Take a look through our answers! Still, have questions?<br/> Please don't be afraid to contact our team at any time.</p>
                    </div>
                    <div className="collapse-block">

                        <div className="sidebar">
                            <h3>Table of Contents</h3>
                            {faq.map((el, id) => {
                                return <Link key={id} to={`/${el.title}`}>
                                    {el.title}
                                </Link>
                            })}
                        </div>

                        <div className="collapse">
                            <Switch>
                                {faq.map((el, id) => {
                                    return <Route path={`/${el.title}`} key={id}>
                                        <CustomCollapse el={el} />
                                    </Route>
                                })}
                            </Switch>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}