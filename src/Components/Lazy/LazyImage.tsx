import { LazyLoadImage } from 'react-lazy-load-image-component' 
import { FC } from 'react';

// IMAGES
import Dev from '@_assets/dev.webp'
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


// FLOWERSTORE
import fsmobile from '@_assets/project/fsmobile.webp'
import fsmobilelogo from '@_assets/project/fsmobile_logo.webp'
import fspotico from '@_assets/project/potico.webp'
import fspoticoprod from '@_assets/project/potico_cod.webp'
import fspoticologo from '@_assets/project/potico_logo.webp'
import fsweb from '@_assets/project/fsweb.webp'
import fsattendace from '@_assets/project/fs_attendance.webp'
import fsattendanceboard from '@_assets/project//fs_attendance_dashboard.webp'

interface imageInterface {
  width?: number,
  height?: number
}

export const DevImage: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={Dev}
        alt="Dev image"
        height={height}
        width={width}
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

//  FLOWERSTORE IMAGES
export const Fsmobile: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage
        src={fsmobile}
        alt="fsmobile image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const FsmobileLogo: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={fsmobilelogo}
        alt="fsmobilelogo image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Fspotico: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={fspotico}
        alt="fspotico image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const FspoticoProduct: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={fspoticoprod}
        alt="fspoticoproduct image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Fspoticologo: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={fspoticologo}
        alt="fspoticologo image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Fsweb: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={fsweb}
        alt="fsweb image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Fsattendance: FC<imageInterface> = ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={fsattendace}
        alt="fsattendace image"
        height={height}
        width={width}
      />
    </div>
  )
}
export const Fsattendanceboard: FC<imageInterface>= ({ width, height }) => {
  return (
    <div>
      <LazyLoadImage 
        src={fsattendanceboard}
        alt="fsattendanceboard image"
        height={height}
        width={width}
      />
    </div>
  )
}