---
id: intro
title: Welcome to Gigahex
sidebar_label: Introduction
---

## Background

Spark developers often face lot of challenges while debugging the application. The challenge is compounded when developing and testing against a transient cluster, and the developer is left
at the mercy of logs stored in Object store like AWS S3 or Yarn Nodes.

## Introduction

Gigahex is a observability platform for Spark batch applications. It allows developers to monitor the deployed spark application,
running on transient clusters in cloud like AWS EMR, Google Dataproc or even a cluster running in your laptop.

Once deployed, it allows you to monitor the application, and get alerts when a task is too slow, or the executor got killed by
yarn cluster or the driver got stuck while interacting with some database or S3. This will enable you to quickly identify the
root issue, and accelerate the deployment of the fix to production.

## How is Gigahex different from ?

### spark-submit

spark-submit is the command thats used to deploy Spark application. Gigahex CLI, also called as `gx` is a wrapper around `spark-submit` command to enable pushing of Spark events, metrics and logs to the Spark cloud.

### spark UI

Similar Spark UI, the Gigahex dashboard gives detailed metrics for various spark events, but in real time. No need to referesh the browser multiple times.
Unlike Spark UI, it also displays aggregated metrics, executor metrics and the logs, which are searchable.

Spark UI also requires the Spark Standalone cluster / Yarn Cluster to be up and running, which is not the case if you are using a
transient cluster on cloud like AWS EMR or Google Dataproc.
