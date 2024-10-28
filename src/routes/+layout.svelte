<script lang="ts">
  import "../styles.css";
</script>

<div style="display: flex; flex-direction: column; gap: 10px">
  <div>
    <a href="/">Home</a>
    <a href="/todos">todos</a>
  </div>

  <slot />
</div>
