import React from 'react'
import s from './Partners.module.sass'

export const Partners = props => {
    return (
        <div>
            {
                props.partners.map((e, i) => (
                    <div>
                        <div className={s.spasiboInfo}> 
                            <h3>{e.spasiboPercent}</h3> 
                            <p>Спасибо от суммы покупки</p> 
                        </div>
                        <img src={e.logo} alt="Company logo"/>  
                        <p>{e.name}</p> 
                    </div>
                ))
            }
        </div>
    )
}