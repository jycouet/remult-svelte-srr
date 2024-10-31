<script lang="ts">
  import "../styles.css";
</script>

<div style="display: flex; flex-direction: column; gap: 10px">
  <div>
    <a class="nav-link" style="margin-right: 10px" href="/">Home</a>
    <a class="nav-link" style="margin-right: 10px" href="/todos">todos</a>
    <a class="nav-link" style="margin-right: 10px" href="/todos?limit=2"
      >todos</a
    >
  </div>

  <style>
    .nav-link:hover {
      background-color: red;
    }
  </style>

  <slot />
</div>
