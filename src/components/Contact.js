import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const formQuery = graphql`
  query {
    wpGfForm(databaseId: {eq: 3}) {
    title
    submitButton {
      text
    }
    formFields {
      nodes {
        type
        id
        ... on WpEmailField {
          id
          cssClass
          placeholder
        }
        ... on WpTextField {
          cssClass
          placeholder
        }
      }
    }
  }
  }
`

const Contact = () => {
    const data = useStaticQuery(formQuery);
    const { wpGfForm: { title, submitButton, formFields: { nodes } } } = data;

    return (
        <section class="contact">

            <div class="contact-form mt-4">
                <h2>{title}</h2>
                <form>
                    {nodes.map(node => {
                        return <input key={node.id} className={node.cssClass} type={node.type} placeholder={node.placeholder} />
                    })}
                    <input type='submit' value={submitButton.text} />
                </form>
            </div>
        </section>
    )
}

export default Contact