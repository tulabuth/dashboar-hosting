import React from 'react'
import { SalesItem } from './SalesItem'
import { WebsiteAnalyst } from './WebsiteAnalyst'
import { ScoreList } from './ScoreList'

export const RightColumn = () => {
  return (
    <div className='w-full p-2'>
        <SalesItem/>
        <WebsiteAnalyst/>
        <ScoreList/>
    </div>
  )
}
