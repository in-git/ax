<template>
  <div class="profile-form system-module">
    <div class="px-8">
      <a-tabs>
        <a-tab-pane key="info" tab="Base info" v-if="userProfile">
          <a-form
            :model="userProfile"
            :wrapper-col="{
              span: 8,
            }"
            :label-col="{
              span: 4,
            }"
            label-align="left"
          >
            <a-card :bordered="false">
              <a-form-item label="Avatar" name="avatar">
                <a-avatar :size="64"></a-avatar>
              </a-form-item>
              <a-form-item label="Nickname" name="nickName">
                <a-input v-model:value="userProfile.nickName"></a-input>
              </a-form-item>
              <a-form-item label="Phone number">
                <a-input v-model:value="userProfile.phonenumber"></a-input>
              </a-form-item>
              <a-form-item label="Email">
                <a-input v-model:value="userProfile.email"></a-input>
              </a-form-item>
              <a-form-item label="Sex">
                <a-radio-group
                  v-model:value="userProfile.sex"
                  :options="sexOptions"
                ></a-radio-group>
              </a-form-item>
              <a-row>
                <a-col :span="8" :offset="4">
                  <a-button type="primary">Submit</a-button>
                </a-col>
              </a-row>
            </a-card>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="auth" tab="Password">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quisquam cum tempore quidem
          ut id ipsum nisi maiores odio. Fugit ex blanditiis eveniet, hic tenetur esse nesciunt et
          nemo eos.
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sexOptions } from '@/global/options/system';
import { userProfile } from '../profile/data';
</script>

<style lang="scss" scoped></style>
