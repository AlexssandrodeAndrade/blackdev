<template>
  <div>
    <header style="color: red;">
      <slot name="header"></slot>
    </header>

    <div style="background: yellow;">
      <slot name="image"></slot>
    </div>

    <main style="color: green;">
        <slot name="content"></slot>
    </main>
  </div>
</template>
