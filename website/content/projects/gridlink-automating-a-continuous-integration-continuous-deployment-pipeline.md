---
slug: "gridlink-automating-a-continuous-integration-continuous-deployment-pipeline"
title: "Automating a CI/CD pipeline"
subtitle: ""
series: "Gridlink"
description: "Automating test, build and deployment using GitHub Actions"
localimage: "/images/github-actions.png"
publishedAt: "2022-12-15T09:00:00.000Z"
tags: ""
published: true
---

## Introduction

CI/CD stands for continuous integration/continuous deployment.

It refers to the practice of automatically building, testing, and deploying software applications at regular intervals.

## Continuous integration

CI, or continuous integration, is the practice of automatically integrating code changes into a shared codebase.

This typically involves running automated tests to ensure that the integrated code is functional and does not introduce any regressions.

To run these tests predictably and repeatably, Gridlink uses GitHub Actions. This is an infrastructure-as-code tool for automating software development workflows.

### Frontend

Our frontend CI is a simple workflow configured to run on pull request events.

The projected is linted and then tested. These tasks must complete successfully in order for the pull request to have permission to merge.

```yaml
name: gridlink-frontend-ci

on:
  pull_request:
    types:
      - opened
      - synchronize
      - reopened

defaults:
  run:
    shell: bash
    working-directory: frontend/

jobs:
  ci:
    name: Build and test frontend
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os:
          - ubuntu-latest
        node-version:
          - 16.16.0
        package-manager:
          - yarn
        lockfile:
          - frontend/yarn.lock

    steps:
      - name: Check out repository
        uses: actions/checkout@v3.2.0

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3.5.1
        with:
          node-version: ${{ matrix.node-version }}
          cache: ${{ matrix.package-manager }}
          cache-dependency-path: ${{ matrix.lockfile }}

      - name: Install npm dependencies
        run: yarn

      - name: Lint project
        run: yarn lint

      - name: Test project
        run: yarn test
```

### Backend

[ Backend deployment ]

## Continuous deployment

### Frontend

[ Frontend deployment ]

### Backend

[ Backend deployment ]
