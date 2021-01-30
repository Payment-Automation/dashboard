import React from 'react'

const ReusableStyles = () => {
    return (
        <style jsx="true">
            {
                ` @import url( 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Source+Sans+Pro:wght@400;700&display=swap');
                :root {
                    --default_blue: #2f5abb;
                    --header_font: 'Nunito', sans-serif;
                    --text_font: 'Source Sans Pro', sans-serif;
                }

                h1,h2,h3,h4,h5{
                    font-family: var(--header_font);
                }

                p,
                span,
                button, 
                a{
                    font-family: var(--text_font);
                }
                

                .text_is_blue {
                    color: var(--default_blue);
                }

                .default_btn {
                    background: var(--default_blue);
                    color: #fff;
                    border: none;
                    padding: 0.5em 3em;
                    border-radius: 20px;
                }

                .align_only {
                    display: flex;
                    align-items: center;
                }

                .center {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .section__text {
                    font-size: 16px;
                }

                .section__head {
                    font-size: 40px;
                }

                .v_align {
                    text-align: center;
                }

                .pointer {
                    cursor: pointer;
                }
                 `
            }</style>
    )
}

export default ReusableStyles;