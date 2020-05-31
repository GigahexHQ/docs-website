---
id: install
title: Installation
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Gigahex SDK consists of agentless collectors, which are responsible for collecting the logs, executor metrics and spark events and publish them to the Gigahex Cloud, where user can view the metrics and search logs through easy to understand user interface. Following is the process of installation process.

:::caution

Make sure you've installed the SDK, on all the nodes of the Spark cluster.

:::

## Install Gigahex SDK

<Tabs
defaultValue="apt"
values={[
{ label: 'Ubuntu/Debian', value: 'apt', },
{ label: 'RedHat/CentOS', value: 'yum', }
]
}>
<TabItem value="apt">

```bash
curl https://gigahex.com/repo/apt | sudo tee -a /etc/apt/sources.list.d/gigahex.list
sudo apt-get update
#For Spark built with Scala 2.11, use the below command
sudo apt-get install gx-cli-2.11
#For Spark built with Scala 2.12, use the below command
sudo apt-get install gx-cli-2.12
```

</TabItem>
<TabItem value="yum">

```bash
curl https://gigahex.com/repo/rpm | sudo tee /etc/yum.repos.d/gigahex.repo
#For Spark built with Scala 2.11
sudo yum install gx-cli-2.11
#For Spark built with Scala 2.12, use the below command
sudo yum install gx-cli-2.12
```

</TabItem>
</Tabs>

Once you've installed the sdk on all the nodes and the edge nodes, then you can test it by using the help command exposed by the `gx-cli`.

```sh
$ gx help
GX 0.1.0-SNAPSHOT
Usage
=================================
login                 Login to gigahex.com
help                  Show help
version               Show version
spark-submit          Submit spark job
```

## Configure the API Keys

Gigahex requires API Keys to be deployed in the workstation, from where the spark application will be submitted. There are two ways of doing it.

- **Using CLI** - Gigahex commandline tool can be used to login to your account and save the API Keys in your current home director - `$HOME/.gxcr`. Here's how you do it.

```sh
$ gx login
Email for https://gigahex.com: <Your email>
Password for https://gigahex.com: <Your password>
```

- **Using Environment variables** - You can find your API Keys and secrets in the [settings](https://gigahex.com/settings), and export the following variables.
  `GHX_API_KEY_ID=<Your API Key ID>` and `GHX_API_KEY_SECRET=<Your API Key Secret>`.

Now you're ready to deploy the Spark application. Let's see an example in the next section.
