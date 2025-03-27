<template>
  <div class="main-container">
    <div class="header-container bg-gradient-primary">
      <div class="separator">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="2560 0 2560 100 0 100" class="fill-default"></polygon>
        </svg>
      </div>
    </div>
    <div class="login-box container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card border-0">
            <p class="title">
              <span>PasswdMan</span>
            </p>
            <form @submit.prevent="onSubmit">
              <div class="row mb-3">
                <div class="col-md-2 text-end d-none d-md-block">
                  <label for="account" class="col-form-label">账号</label>
                </div>
                <div class="col-md-9">
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.password }"
                    id="account"
                    placeholder="请输入账号"
                    v-model="account"
                    v-bind="accountAttrs"
                  />
                  <div class="invalid-feedback">{{ errors.account }}</div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-2 text-end d-none d-md-block">
                  <label for="password" class="col-form-label">密码</label>
                </div>
                <div class="col-md-9">
                  <div :class="{ 'is-invalid': errors.password }">
                    <input
                      type="password"
                      class="form-control"
                      :class="{ 'is-invalid': errors.password }"
                      id="password"
                      placeholder="请输入密码"
                      v-model="password"
                      v-bind="passwordAttrs"
                    />
                  </div>
                  <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
              </div>
              <div class="row justify-content-center mb-3">
                <button type="submit" class="btn btn-primary col-6 col-md-4 col-sm-6">登录</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useForm, useSetFormValues } from 'vee-validate'
import { object, string } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'

const { handleSubmit, defineField, errors } = useForm({
  validationSchema: toTypedSchema(
    object({
      account: string().required('请输入账号'),
      password: string().required('请输入密码').min(8, '密码长度至少为8位'),
    }),
  ),
})
const [account, accountAttrs] = defineField('account')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(
  (values) => {
    alert(JSON.stringify(values, null, 2))
  },
  ({ values, errors, results }) => {
    console.log(values) // current form values
    console.log(errors) // a map of field names and their first error message
    console.log(results) // a detailed map of field names and their validation results
  },
)

watch(errors, () => {
  console.log(errors)
})

onMounted(() => {
  document.body.classList.add('bg-default')
})
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100vh;
}
.header-container {
  width: 100%;
  height: 50%;
  position: relative;
}
.bg-gradient-primary {
  background-image: linear-gradient(
    87deg,
    var(--pa-primary-bg-subtle) 0,
    var(--pa-primary-color) 100%
  ) !important;
}
.separator {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  overflow: hidden;
  line-height: 0;
  svg {
    position: absolute;
    bottom: 0;
    pointer-events: none;
    height: 100%;
    width: 100%;
  }
  .fill-default {
    fill: var(--pa-body-color) !important;
  }
}
.login-box {
  margin-top: -10rem;
  .card {
    background-color: var(--bs-secondary-bg);
    padding: 1rem;
  }
  .title {
    font-family: 'Luckiest Guy';
    font-size: 2.5rem;
    color: var(--pa-body-color);
    position: relative;
    span {
      position: relative;
      z-index: 10;
    }
    .link {
      position: absolute;
      display: inline-block;
      width: 80%;
      border-bottom: 2px solid var(--pa-primary-color);
      left: 30px;
      top: 37px;
      z-index: 5;
    }
  }
}
</style>
