import { LazyLoadImage } from 'react-lazy-load-image-component' 
import { FC } from 'react';

// IMAGES
import initial from '@_assets/rg.webp'
import html from '@_assets/skills/html.webp'
import css from '@_assets/skills/css.webp'
import js from '@_assets/skills/js.webp'
import php from '@_assets/skills/php.webp'
import mysql from '@_assets/skills/mysql.webp'
import firebase from '@_assets/skills/firebase.webp'
import git from '@_assets/skills/git.webp'
import laragon from '@_assets/skills/Laragon.webp'
import node from '@_assets/skills/node js.webp'
import wp from '@_assets/skills/wordpress.webp'
import laravel from '@_assets/skills/laravel.webp'
import next from '@_assets/skills/next js.webp'
import reactjs from '@_assets/skills/react-js.webp'
import reactnative from '@_assets/skills/react-native.webp'
import typescript from '@_assets/skills/typescript.webp'


import ise from '@_assets/ise.webp'
import e from '@_assets/e.webp'
import fs from '@_assets/fs.webp'

interface imageInterface {
  width?: number,
  height?: number
}



export const ISE: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={ise}
        alt="ise"
        height={height}
        width={width}
      />
    </div>
  )
}
export const E: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={e}
        alt="e"
        height={height}
        width={width}
      />
    </div>
  )
}
export const FS: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={fs}
        alt="fs"
        height={height}
        width={width}
      />
    </div>
  )
}

export const INQ: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src='https://media.licdn.com/dms/image/v2/C560BAQGGstm4j-fNvg/company-logo_100_100/company-logo_100_100/0/1672425203925/inquirerdotnet_logo?e=1762992000&v=beta&t=CTNlcnXVfnOGOKDOeb0iROk64axdCw5mjDHytnFQ-98'
        alt="inq"
        width={width}
        height={height}
      />
    </div>
  )
}

export const Initial: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={initial}
        alt="initial image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Html: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={html}
        alt="html image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Css: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={css}
        alt="css image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Js: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={js}
        alt="js image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Php: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={php}
        alt="php image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const  Mysql: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={mysql}
        alt="mysql image"
        height={height}
        width={width}
      />
    </div>
  )
}

export const Firebase: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={firebase}
        alt="firebase image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Git: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={git}
        alt="git image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Laragon: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={laragon}
        alt="laragon image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Node: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={node}
        alt="node image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Wordpress: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={wp}
        alt="wp image"
        height={height}
        width={width}
      />
    </div>
  )
}

export const Laravel: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={laravel}
        alt="laravel image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Next: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={next}
        alt="next image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Reactjs: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={reactjs}
        alt="reactjs image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const ReactNative: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={reactnative}
        alt="reactnative image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Typescript: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={typescript}
        alt="typescript image"
        height={height}
        width={width}
      />
    </div>
  )
}

