import React, { Component } from 'react'

export default class HeroStill extends Component {
  render() {
    return (
      <div className='radials-bg w-full h-[60vh] -z-10'>
        <div className='max-w-[1000px] text-white mx-auto px-4 flex flex-col justify-center text-center h-[100%]'>
          <h1 className='text-6xl italic font-bold tracking-wider uppercase'>{this.props.heading}</h1>
          <h3 className='tracking-wider text-2xl text-gray-300 pt-4'>{this.props.text}</h3>
        </div>
      </div>
    )
  }
}
