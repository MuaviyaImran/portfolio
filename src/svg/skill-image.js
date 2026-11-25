// import * as adobeXd from "./skills/adobe-xd.svg";
// import adobeaudition from "./skills/adobeaudition.svg";
// import afterEffects from "./skills/after-effects.svg";
// import aws from "./skills/aws.svg";
// import azure from "./skills/azure.svg";
// import blender from "./skills/blender.svg";
// import bulma from "./skills/bulma.svg";
// import canva from "./skills/canva.svg";
// import capacitorjs from "./skills/capacitorjs.svg";
// import coffeescript from "./skills/coffeescript.svg";
// import deno from "./skills/deno.svg";
// import django from "./skills/django.svg";
// import fastify from "./skills/fastify.svg";
// import gimp from "./skills/gimp.svg";
// import go from "./skills/go.svg";
// import graphql from "./skills/graphql.svg";
// import haxe from "./skills/haxe.svg";
// import java from "./skills/java.svg";
// import julia from "./skills/julia.svg";
// import kotlin from "./skills/kotlin.svg";
// import lightroom from "./skills/lightroom.svg";
// import markdown from "./skills/markdown.svg";
// import matlab from "./skills/matlab.svg";
// import memsql from "./skills/memsql.svg";
// import microsoftoffice from "./skills/microsoftoffice.svg";
// import nginx from "./skills/nginx.svg";
// import numpy from "./skills/numpy.svg";
// import opencv from "./skills/opencv.svg";
// import php from "./skills/php.svg";
// import picsart from "./skills/picsart.svg";
// import premierepro from "./skills/premierepro.svg";
// import pytorch from "./skills/pytorch.svg";
// import ruby from "./skills/ruby.svg";
// import selenium from "./skills/selenium.svg";
// import sketch from "./skills/sketch.svg";
// import strapi from "./skills/strapi.svg";
// import svelte from "./skills/svelte.svg";
// import swift from "./skills/swift.svg";
// import tensorflow from "./skills/tensorflow.svg";
// import unity from "./skills/unity.svg";
// import webix from "./skills/webix.svg";
// import wolframalpha from "./skills/wolframalpha.svg";
// import wordpress from "./skills/wordpress.svg";
// import laravel from "./skills/laravel.svg";
// import datascience from "./skills/datascience.svg";
// import elixir from "./skills/elixir.svg";
// import jenkins from "./skills/jenkins.svg";
// import phoenix from "./skills/phoenix.svg";
import microservices from "./skills/microservices.svg";
import illustrator from "./skills/illustrator.svg";
import office from "./skills/microsoftoffice.svg";
import typescript from "./skills/typescript.svg";
import postgresql from "./skills/postgresql.svg";
import materialui from "./skills/materialui.svg";
import javascript from "./skills/javascript.svg";
import vuetifyjs from "./skills/vuetifyjs.svg";
import photoshop from "./skills/photoshop.svg";
import cplusplus from "./skills/cplusplus.svg";
import bootstrap from "./skills/bootstrap.svg";
import tailwind from "./skills/tailwind.svg";
import supabase from "./skills/supabase.svg";
import firebase from "./skills/firebase.svg";
import railway from "./skills/railway.svg";
import mongoDB from "./skills/mongoDB.svg";
import flutter from "./skills/flutter.svg";
import fastapi from "./skills/fastapi.svg";
import angular from "./skills/angular.svg";
import vitejs from "./skills/vitejs.svg";
import strapi from "./skills/strapi.png";
import python from "./skills/python.svg";
import nuxtJS from "./skills/nuxtJS.svg";
import nextJS from "./skills/nextJS.svg";
import docker from "./skills/docker.svg";
import csharp from "./skills/csharp.svg";
import redis from "./skills/redis.svg";
import react from "./skills/react.svg";
import mysql from "./skills/mysql.svg";
import ionic from "./skills/ionic.svg";
import flask from "./skills/flask.svg";
import figma from "./skills/figma.svg";
import nodejs from "./skills/node.svg";
import restapi from "./skills/api.svg";
import saas from "./skills/cloud.svg";
import html from "./skills/html.svg";
import dart from "./skills/dart.svg";
import golang from "./skills/go.svg";
import vue from "./skills/vue.svg";
import git from "./skills/git.svg";
import gcp from "./skills/gcp.svg";
import css from "./skills/css.svg";
import c from "./skills/c.svg";

const skillIcons = {
  nodejs,
  saas,
  flask,
  office,
  gcp,
  html,
  photoshop,
  docker,
  illustrator,
  css,
  angular,
  javascript,
  "next js": nextJS,
  "nuxt js": nuxtJS,
  react,
  reactjs: react,
  typescript,
  vue,
  bootstrap,
  mongodb: mongoDB,
  mysql,
  postgresql,
  tailwind,
  vitejs,
  python,
  vuetifyjs,
  c,
  "c++": cplusplus,
  "c#": csharp,
  dart,
  firebase,
  git,
  materialui,
  figma,
  flutter,
  ionic,
  golang,
  strapi,
  fastapi,
  restapi,
  microservices,
  redis,
  railway,
  supabase,
  // phoenix,
  // jenkins,
  // elixir,
  // redis,
  // datascience,
  // laravel,
  // "adobe xd": adobeXd,
  // "after effects": afterEffects,
  // "react native": react,
  // svelte,
  // bulma,
  // capacitorjs,
  // coffeescript,
  // memsql,
  // java,
  // kotlin,
  // julia,
  // matlab,
  // php,
  // ruby,
  // swift,
  // "adobe audition": adobeaudition,
  // aws,
  // deno,
  // django,
  // "django rest framework":django,
  // gimp,
  // graphql,
  // lightroom,
  // nginx,
  // numpy,
  // opencv,
  // "premiere pro": premierepro,
  // pytorch,
  // selenium,
  // strapi,
  // tensorflow,
  // webix,
  // wordpress,
  // azure,
  // blender,
  // fastify,
  // haxe,
  // markdown,
  // "microsoft office": microsoftoffice,
  // picsart,
  // sketch,
  // unity,
  // wolframalpha,
  // canva,
};

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  return skillIcons[skillID] || null;
};
