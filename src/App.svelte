<script lang="ts">
  let { asr } = $props();
</script>

This is the root component. Trigger HMR in this component, then attempt to click
one of the links below. You will then get the error, because HMR removed the
properties from the component that ASR needs to function.
<br />
<a href={asr.makePath("app.child1")}>Child 1</a>
<a href={asr.makePath("app.child2")}>Child 2</a>
<br />
<uiView></uiView>
