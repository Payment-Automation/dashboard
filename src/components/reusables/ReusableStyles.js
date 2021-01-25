import React from 'react'

const ReusableStyles = () => {
    return (
       <style jsx="true">{`

       :root{
           --default_blue: #2f5abb;
       }

       .text_is_blue{
           color: var(--default_blue);
       }

       .default_btn{
background: var(--default_blue);
color: #fff;
border: none;
padding: 0.5em 3em;
border-radius: 20px;
       }

       .align_only{
           display: flex;
           align-items: center;
       }

       .center{
           display: flex;
           align-items: center;
           justify-content: center;
       }

       .section__text{
           font-size: 16px;
       }

       .section__head{
           font-size: 40px;
       }

       .v_align{
           text-align: center;
       }

       .pointer{
           cursor: pointer;
       }



       `}</style>
    )
}

export default ReusableStyles;