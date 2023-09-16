<template>
  <Wrapper
    :type="'vue'"
    :id="'ducdc'"
    :className="'dochiduc'"
    :mg="{ t: 30 }"
    :pd="{ r: 20, b: 30 }"
    :br="'10'"
    :bg="'blue6'"
    @click="console.log('ducdc')"
    >ppppp</Wrapper
  >
  <Heading :type="'vue'" :tag="'h1'" :color="'otherElectricViolet'" :font="'semibold'">sss</Heading>
  <Button :type="'vue'" :category="'link'" :size="'md'">ducdc</Button>
</template>

<script setup>
import { Heading, Button, Wrapper } from "js-ui-clevai";
</script>
