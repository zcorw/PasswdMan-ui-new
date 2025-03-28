<template>
  <div class="main-container">
    <div class="login-box container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-6 col-md-8">
          <p class="title">
            <span>PasswdMan</span>
          </p>
          <div class="card border">
            <form @submit.prevent="onSubmit">
              <div>
                <label for="account" class="col-form-label">Account</label>
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
              <div>
                <label for="password" class="col-form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  :class="{ 'is-invalid': errors.password }"
                  id="password"
                  placeholder="请输入密码"
                  v-model="password"
                  v-bind="passwordAttrs"
                />
                <div class="invalid-feedback">{{ errors.password }}</div>
              </div>
              <div class="row justify-content-center">
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

</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100vh;
  background: url(/images/login.webp) repeat center center fixed;
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .card {
    padding: 1.5rem 1rem;
    --bs-border-color: #164485;
    --bs-card-bg: #072246;
    form {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .col-form-label {
      color: #fff;
    }
    .form-control {
      --bs-body-bg: #092752;
      --bs-body-color: #fff;
      padding: 0.8rem;
      &::placeholder {
        color:#fff;
      }
    }
  }
  .title {
    font-family: 'Luckiest Guy';
    font-size: 2.5rem;
    color: #fff;
    position: relative;
    text-align: center;
    margin-bottom: 4rem;
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
