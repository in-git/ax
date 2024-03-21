<template>
  <div class="welcome p-12 flex flex-col">
    <h1 class="text-32">Welcome</h1>
    <div class="desc">
      <div class="mb-12 text-999">
        1Panel is a modern and Open-Source linux server operation and management panel, the
        functions and advantages of 1Panel Plus include:
      </div>
      <a-divider></a-divider>
      <ul>
        <li>
          <span>Efficient Management:</span>
          Users can easily manage Linux servers through a web graphical interface, achieving
          functions such as host monitoring, file management, database management, and container
          management. Rapid Website
        </li>
        <li>
          <span>Building:</span>
          Deep integration of open-source website building software WordPress and Halo, with
          operations such as domain binding and SSL certificate configuration completed with one
          click.
        </li>
        <li>
          <span>Application Store:</span>
          Curates a variety of high-quality open-source tools and application software, assisting
          users in easy installation and upgrades. Security and Reliability: Based on container
          management and application deployment, minimizing vulnerability exposure, while providing
          features such as firewall and log auditing.
        </li>
        <li>
          <span>One-Click Backup:</span>
          Supports one-click backup and restoration, allowing users to backup data to various cloud
          storage media, ensuring data is never lost.
        </li>
      </ul>
    </div>
    <div class="media flex-1"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.welcome {
  flex-basis: 70%;
  background: #f8f8f8;
  border-right: 1px solid #ddd;
  .desc {
    margin: 24px 0;
    color: #333;
  }
  ul {
    list-style: disc;
    padding-left: 20px;
    li {
      margin-bottom: 12px;
      font-size: 14px;
    }
    span {
      font-weight: bold;
    }
  }
  .media {
    background: url('./assets/background.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: var(--radius);
    overflow: hidden;
  }
}
</style>
