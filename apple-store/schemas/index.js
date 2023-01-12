import product from './product' 
import blockContent from './blockContent'
import category from './category'
import { user, account } from 'next-auth-sanity/schemas'

export const schemaTypes = [product, blockContent, category, user, account]
