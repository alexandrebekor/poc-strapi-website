import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const Category = ({ data }) => {
    return (
        <Layout>
            <h2>Category :: {data.category.name}</h2>
        </Layout>
    )
}

export default Category

export const pageQuery = graphql`
query($id: Int!) {
  category: strapiCategory(strapiId: {eq: $id}) {
    name
  }
}
`