---
id: install
title: Installation
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Gigahex SDK consists of agentless collectors, which are responsible for collecting the logs, executor metrics and spark events and publish them to the Gigahex Cloud, where user can view the metrics and search logs through easy to understand user interface. Following is the process of installation process.

## Install Gigahex SDK

:::caution

Make sure you have admin/sudo access to your workstation

:::

<Tabs
defaultValue="nix"
values={[
{ label: 'MacOS/*Nix', value: 'nix' }
]
}>
<TabItem value="nix">

```bash
curl https://packages.gigahex.com/install.sh -sSfL | sh
```

</TabItem>

</Tabs>

Once you've installed the sdk on all the nodes and the edge nodes, then you can test it by using the help command exposed by the `gx-cli`.

```sh
$ gx help
Gigahex CLI - v0.0.3

Usage
=====================================
login                 Login to gigahex.com
help                  Show help
version               Show version
spark-submit          Submit spark job
agent                 Create and manage agents
```

## Configure the API Keys

Gigahex requires API Keys to be deployed in the workstation, from where the spark application will be submitted. There are two ways of doing it.

- **Using CLI** - Gigahex commandline tool can be used to login to your account and save the API Keys in your current home director - `$HOME/.gxcr`. Here's how you do it.

```sh
$ gx login
Email for https://gigahex.com: <Your email>
Password for https://gigahex.com: <Your password>
```

- **Using Environment variables** - You can find your API Keys and secrets in the `API Auth` section of the [settings](https://app.gigahex.com/settings) page, and export the following variables.
  `GHX_API_KEY_ID=<Your API Key ID>` and `GHX_API_KEY_SECRET=<Your API Key Secret>`.

Now you're ready to deploy the Spark application. Let's see an example in the next section.
