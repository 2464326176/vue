<template>
  <div>
    <a-tabs
        style="margin-top:0"
        default-active-key="flow"
        tab-position="top"
        :destroy-inactive-tab-pane="true"
        size="small">

      <a-tab-pane key="flow" tab="流程图" >
        <flow/>
      </a-tab-pane>

      <a-tab-pane key="quickStart01" tab="快速上手01" >
        <quick-start01/>
      </a-tab-pane>
      <a-tab-pane key="quickStart02" tab="快速上手02" >
        <quick-start02/>
      </a-tab-pane>
      <a-tab-pane key="quickStart03" tab="快速上手03" >
        <quick-start03/>
      </a-tab-pane>
      <a-tab-pane key="quickStart04" tab="快速上手04" >
        <quick-start04/>
      </a-tab-pane>
      <a-tab-pane key="basic01" tab="基础教程01-画布" >
        <basic01/>
      </a-tab-pane>
      <a-tab-pane key="basic0201" tab="基础教程02-01基类cell" >
        <basic0201/>
      </a-tab-pane>
      <a-tab-pane key="basic0202" tab="基础教程02-02拖拽模板综合实例" >
        <basic0202/>
      </a-tab-pane>

      <a-tab-pane key="basic0203" tab="基础教程02-03基类cell" >
        <basic0203/>
      </a-tab-pane>

      <a-tab-pane key="basic03" tab="基础教程03-节点node" >
        <basic03/>
      </a-tab-pane>
      <a-tab-pane key="basic0401" tab="基础教程04-01创建边、路径点、路由、链接器" >
        <basic0401/>
      </a-tab-pane>
      <a-tab-pane key="basic0402" tab="基础教程04-02边的标签和公交路线实例" >
        <basic0402/>
      </a-tab-pane>

      <a-tab-pane key="basic0501" tab="基础教程05-01 基础嵌套" >
        <basic0501/>
      </a-tab-pane>

      <a-tab-pane key="senior01" tab="高级进阶 vue" >
        <senior01/>
      </a-tab-pane>

      <a-tab-pane key="senior02" tab="高级进阶 群组+vue" >
        <senior02/>
      </a-tab-pane>

    </a-tabs>
  </div>
</template>

<script>
import flow from '../flow'
import quickStart01 from '../quickStart/index01'
import quickStart02 from '../quickStart/index02'
import quickStart03 from '../quickStart/index03'
import quickStart04 from '../quickStart/index04'
import basic01 from '../basic/index01'
import basic0201 from '../basic/index02-01'
import basic0202 from '../basic/index02-02'
import basic0203 from '../basic/index02-03'
import basic03 from '../basic/index03'
import basic0401 from '../basic/index04-1'
import basic0402 from '../basic/index04-2'
import basic0501 from '../basic/index05-1'

import senior01 from '../senior/index01/index'
import senior02 from '../senior/index02'

export default {
  name: "index",
  components:{
    flow,
    quickStart01,
    quickStart02,
    quickStart03,
    quickStart04,
    basic01,
    basic0201,
    basic0202,
    basic0203,
    basic03,
    basic0401,
    basic0402,
    basic0501,
    senior01,
    senior02
  }
}
</script>

<style scoped>

</style>
